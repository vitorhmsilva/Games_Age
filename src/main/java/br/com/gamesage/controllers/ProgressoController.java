package br.com.gamesage.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.gamesage.dtos.ProgressoDTO;
import br.com.gamesage.entities.Progresso;
import br.com.gamesage.services.ProgressoService;

@RestController
@RequestMapping(value = "/progressos")
@CrossOrigin(origins = "*")
public class ProgressoController {

    private final ProgressoService service;

    public ProgressoController(ProgressoService service) {
        this.service = service;
    }
    
    @GetMapping(value = "/getProgresso/{id}")
    public ProgressoDTO getProgressoById(@PathVariable Long id) {
        return new ProgressoDTO(service.findAllSemDTO().stream().filter(p -> p.getUsuario().getIdUsuario().equals(id)).findAny().get());
    }

    @PostMapping(value = "/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Progresso progresso) {
        return service.cadastrarAlterar(progresso, "cadastrar");
    }

    @PutMapping(value = "/alterar")
    public ResponseEntity<?> alterar(@RequestBody Progresso progresso) {
        return service.cadastrarAlterar(progresso, "alterar");
    }

    @DeleteMapping(value = "/remover/{id}")
    public ResponseEntity<?> deletar(@PathVariable Long id) {
    	Progresso zeDaManga = service.findAllSemDTO().stream().filter(p -> p.getUsuario().getIdUsuario().equals(id)).findAny().get();
        return service.remover(zeDaManga.getPk());
    }
}
