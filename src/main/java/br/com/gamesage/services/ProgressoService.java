package br.com.gamesage.services;

import br.com.gamesage.dtos.ProgressoDTO;
import br.com.gamesage.entities.Progresso;
import br.com.gamesage.entities.Resposta;
import br.com.gamesage.repositories.ProgressoRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProgressoService {

    private final ProgressoRepo repo;
    private final Resposta resposta;

    public ProgressoService(ProgressoRepo repo, Resposta resposta) {
        this.repo = repo;
        this.resposta = resposta;
    }

    public List<ProgressoDTO> findAll() {
        List<ProgressoDTO> progressoDTOs = new ArrayList<>();
        for (Progresso progresso : repo.findAll()) {
            progressoDTOs.add(new ProgressoDTO(progresso));
        }
        return progressoDTOs;
    }

}
