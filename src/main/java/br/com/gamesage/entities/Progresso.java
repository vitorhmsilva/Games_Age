package br.com.gamesage.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "pk", scope = Progresso.class)
@Table(name = "tb_progresso")
@AssociationOverrides({
        @AssociationOverride(name = "pk.usuario", joinColumns = @JoinColumn(name = "id_usuario")),
        @AssociationOverride(name = "pk.jogo", joinColumns = @JoinColumn(name = "id_jogo"))})
public class Progresso {

    @EmbeddedId
    private ProgressoId pk = new ProgressoId();
    @Column(name = "progresso")
    private Integer progresso;
    @Column(name = "conquistas")
    private Integer conquistas;
    @Column(name = "plataforma")
    private Integer plataforma;

    public ProgressoId getPk() {
        return pk;
    }

    public void setPk(ProgressoId pk) {
        this.pk = pk;
    }

    public Integer getProgresso() {
        return progresso;
    }

    public void setProgresso(Integer progresso) {
        this.progresso = progresso;
    }

    public Integer getConquistas() {
        return conquistas;
    }

    public void setConquistas(Integer conquistas) {
        this.conquistas = conquistas;
    }

    @Transient
    public Usuario getUsuario() {
        return getPk().getUsuario();
    }

    public void setUsuario(Usuario usuario) {
        getPk().setUsuario(usuario);
    }

    @Transient
    public Jogo getJogo() {
        return getPk().getJogo();
    }

    public void setJogo(Jogo jogo) {
        getPk().setJogo(jogo);
    }

    public Integer getPlataforma() {
        return plataforma;
    }

    public void setPlataforma(Integer plataforma) {
        this.plataforma = plataforma;
    }
}
