package br.com.gamesage.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.gamesage.dtos.JogoDTO;
import br.com.gamesage.entities.Jogo;
import br.com.gamesage.entities.Resposta;
import br.com.gamesage.repositories.JogoRepo;

@Service
public class JogoService {

    private final JogoRepo repo;
    private final Resposta resposta;

    public JogoService(JogoRepo repo, Resposta resposta) {
        this.repo = repo;
        this.resposta = resposta;
    }
    
    public List<JogoDTO> findAll() {
        List<JogoDTO> jogoDTOs = new ArrayList<>();
        for (Jogo jogo : repo.findAll()) {
            jogoDTOs.add(new JogoDTO(jogo));
        }
        return jogoDTOs;
    }
    
  //Cadastrar ou Alterar usuários
    public ResponseEntity<?> cadastrarAlterar(Jogo jogo, String acao) {
    	if(jogo.getDescricao() == null) {
    		resposta.setMensagem("Ocorreu um erro ao tentar cadastrar/alterar o jogo.");
            return new ResponseEntity<>(resposta, HttpStatus.INTERNAL_SERVER_ERROR);
    	}
        if (jogo.getDescricao().isBlank()) {
            resposta.setMensagem("A descrição do jogo é obrigatória.");
            return new ResponseEntity<>(resposta, HttpStatus.BAD_REQUEST);
        } else if (jogo.getNome().isBlank()) {
            resposta.setMensagem("O nome do jogo é obrigatorio");
            return new ResponseEntity<>(resposta, HttpStatus.BAD_REQUEST);
        } else if (jogo.getProgressos() == null || jogo.getProgressos().isEmpty()) {
            resposta.setMensagem("É necessário haver progressos.");
            return new ResponseEntity<>(resposta, HttpStatus.BAD_REQUEST);
        } else {
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<>(repo.save(jogo), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>(repo.save(jogo), HttpStatus.OK);
            }
        }
    }

    public ResponseEntity<?> remover(Long id) {
        repo.deleteById(id);
        resposta.setMensagem("O Jogo foi Removido com Sucesso!");
        return new ResponseEntity<>(resposta, HttpStatus.OK);
    }

	
    
}
