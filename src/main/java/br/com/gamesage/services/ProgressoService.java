package br.com.gamesage.services;

import br.com.gamesage.dtos.ProgressoDTO;
import br.com.gamesage.entities.Progresso;
import br.com.gamesage.repositories.ProgressoRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProgressoService {

    private final ProgressoRepo repo;

    public ProgressoService(ProgressoRepo repo) {
        this.repo = repo;
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

}
