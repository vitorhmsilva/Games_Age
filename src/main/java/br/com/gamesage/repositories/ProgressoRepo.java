package br.com.gamesage.repositories;

import br.com.gamesage.entities.Progresso;
import br.com.gamesage.entities.ProgressoId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProgressoRepo extends JpaRepository<Progresso, ProgressoId> {
}
