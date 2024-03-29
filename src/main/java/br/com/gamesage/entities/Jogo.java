package br.com.gamesage.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

@Component
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "idJogo", scope = Jogo.class)
@Table(name = "tb_jogo")
public class Jogo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_jogo")
    private Long idJogo;
    @Column(name = "nome_jogo")
    private String nomeJogo;
    @Column(name = "descricao")
    private String descricao;
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "pk.jogo")
    private Set<Progresso> progressos;

    public Jogo() {
        progressos = new HashSet<>(0);
    }

    public Long getIdJogo() {
        return idJogo;
    }

    public void setIdJogo(Long idJogo) {
        this.idJogo = idJogo;
    }

    public String getNome() {
        return nomeJogo;
    }

    public void setNome(String nomeJogo) {
        this.nomeJogo = nomeJogo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Set<Progresso> getProgressos() {
        return progressos;
    }

    public void setProgressos(Set<Progresso> progressos) {
        this.progressos = progressos;
    }
}
