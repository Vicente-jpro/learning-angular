package com.example.learn_api.controller;

import com.example.learn_api.dto.ManagerDTO;
import com.example.learn_api.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/managers")
@CrossOrigin(origins = "*")
public class ManagerController {
    
    @Autowired
    private ManagerService managerService;
    
    @GetMapping
    public ResponseEntity<List<ManagerDTO>> getAllManagers() {
        List<ManagerDTO> managers = managerService.getAllManagers();
        return ResponseEntity.ok(managers);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ManagerDTO> getManagerById(@PathVariable String id) {
        ManagerDTO manager = managerService.getManagerById(Long.valueOf(id));
        return ResponseEntity.ok(manager);
    }
    
    @PostMapping
    public ResponseEntity<ManagerDTO> createManager(@RequestBody ManagerDTO managerDTO) {
        ManagerDTO createdManager = managerService.createManager(managerDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdManager);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<ManagerDTO> updateManager(@PathVariable Long id, @RequestBody ManagerDTO managerDTO) {
        ManagerDTO updatedManager = managerService.updateManager(id, managerDTO);
        return ResponseEntity.ok(updatedManager);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteManager(@PathVariable Long id) {
        managerService.deleteManager(id);
        return ResponseEntity.noContent().build();
    }
}

