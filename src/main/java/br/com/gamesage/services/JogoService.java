package br.com.gamesage.services;

import br.com.gamesage.dtos.JogoDTO;
import br.com.gamesage.entities.Jogo;
import br.com.gamesage.entities.Resposta;
import br.com.gamesage.entities.Jogo;
import br.com.gamesage.repositories.JogoRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
}
