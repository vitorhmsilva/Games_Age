package br.com.gamesage.controllers;

import br.com.gamesage.entities.Resposta;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/")
@CrossOrigin(origins = "*")
public class Endpoint {

    private final Resposta resposta = new Resposta();
    @GetMapping
    public ResponseEntity<?> qualquerCoisa() {
        return new ResponseEntity<>("Oi", HttpStatus.OK);
    }

}
