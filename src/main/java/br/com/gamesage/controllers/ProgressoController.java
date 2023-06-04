package br.com.gamesage.controllers;

import br.com.gamesage.dtos.ProgressoDTO;
import br.com.gamesage.services.ProgressoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/progressos")
@CrossOrigin(origins = "*")
public class ProgressoController {

    @Autowired
    private final ProgressoService service;

    public ProgressoController(ProgressoService service) {
        this.service = service;
    }

    @GetMapping
    public List<ProgressoDTO> findAll() {
        return service.findAll();
    }
}
