package br.com.gamesage.dtos;

import br.com.gamesage.entities.Progresso;
import lombok.Data;

@Data
public class ProgressoDTO {

    private Integer progresso;
    private Integer conquistas;
    private JogoDTO jogo;

    public ProgressoDTO() {
    }

    public ProgressoDTO(Progresso progresso) {
        this.progresso = progresso.getProgresso();
        this.conquistas = progresso.getConquistas();
        this.jogo = new JogoDTO(progresso.getJogo());
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

    public JogoDTO getJogo() {
        return jogo;
    }

    public void setJogo(JogoDTO jogo) {
        this.jogo = jogo;
    }
}
