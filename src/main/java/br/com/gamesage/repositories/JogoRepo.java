package br.com.gamesage.repositories;

import br.com.gamesage.entities.Jogo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JogoRepo extends JpaRepository<Jogo, Long> {
}
