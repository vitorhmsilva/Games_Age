package br.com.gamesage.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.gamesage.dtos.ProgressoDTO;
import br.com.gamesage.dtos.UsuarioDTO;
import br.com.gamesage.entities.Progresso;
import br.com.gamesage.entities.ProgressoId;
import br.com.gamesage.entities.Resposta;
import br.com.gamesage.repositories.ProgressoRepo;

@Service
public class ProgressoService {

    private final ProgressoRepo repo;
    private final Resposta resposta;

    public ProgressoService(ProgressoRepo repo, Resposta resposta) {
        this.repo = repo;
        this.resposta = resposta;
    }

    public List<Progresso> findAllSemDTO(){
    	return repo.findAll();
    }
    
    public List<ProgressoDTO> findAll() {
        List<ProgressoDTO> progressoDTOs = new ArrayList<>();
        for (Progresso progresso : repo.findAll()) {
            progressoDTOs.add(new ProgressoDTO(progresso));
        }
        return progressoDTOs;
    }

    public List<ProgressoDTO> findAllByIdUsuario(String apelido) {
        List<ProgressoDTO> progressoDTOs = new ArrayList<>();
        for (Progresso progresso : repo.findAll()) {
            if (progresso.getUsuario().getApelido().equals(apelido)) {
                progressoDTOs.add(new ProgressoDTO(progresso));
            }
        }
        return progressoDTOs;
    }

    //Cadastrar ou Alterar usuários
    public ResponseEntity<?> cadastrarAlterar(Progresso progresso, String acao) {
    	if(progresso == null) {
    		resposta.setMensagem("Ocorreu um erro ao tentar cadastrar/alterar o progresso.");
            return new ResponseEntity<>(resposta, HttpStatus.INTERNAL_SERVER_ERROR);
    	}
        if (progresso.getConquistas() == null) {
            resposta.setMensagem("É necessário haver conquistas vinculadas ao progresso.");
            return new ResponseEntity<>(resposta, HttpStatus.BAD_REQUEST);
        } else if (progresso.getPlataforma() == null) {
            resposta.setMensagem("É necessário haver uma plataforma vinculado ao progresso.");
            return new ResponseEntity<>(resposta, HttpStatus.BAD_REQUEST);
        } else if (progresso.getJogo() == null || progresso.getJogo().getIdJogo() == null) {
            resposta.setMensagem("É necessário haver um jogo vinculado ao progresso.");
            return new ResponseEntity<>(resposta, HttpStatus.BAD_REQUEST);
        } else if (progresso.getUsuario() == null || progresso.getUsuario().getIdUsuario() == null) {
            resposta.setMensagem("É necessário haver um usuário vinculado ao progresso.");
            return new ResponseEntity<>(resposta, HttpStatus.BAD_REQUEST);
        }else {
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<>(repo.save(progresso), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>(repo.save(progresso), HttpStatus.OK);
            }
        }
    }

    public ResponseEntity<?> remover(ProgressoId id) {
        repo.deleteById(id);
        resposta.setMensagem("O Progresso foi Removido com Sucesso!");
        return new ResponseEntity<>(resposta, HttpStatus.OK);
    }

	public ProgressoDTO getProgressoById(ProgressoId id) {
		return repo.findById(id).isPresent() ? new ProgressoDTO(repo.findById(id).get()) : null;
	}
}
