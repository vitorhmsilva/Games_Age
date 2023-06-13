package br.com.gamesage.controllers;

import br.com.gamesage.dtos.JogoDTO;
import br.com.gamesage.dtos.UsuarioDTO;
import br.com.gamesage.entities.Usuario;
import br.com.gamesage.services.JogoService;

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

import java.util.List;

@RestController
@RequestMapping(value = "/jogos")
@CrossOrigin(origins = "*")
public class JogoController {

    private final JogoService service;

    public JogoController(JogoService service) {
        this.service = service;
    }

    @GetMapping
    public List<JogoDTO> findAll() {
        return service.findAll();
    }
    
}
