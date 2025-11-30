package com.example.learn_api.service;

import com.example.learn_api.dto.ManagerDTO;
import com.example.learn_api.entity.Manager;
import com.example.learn_api.exception.ResourceNotFoundException;
import com.example.learn_api.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ManagerService {
    
    @Autowired
    private ManagerRepository managerRepository;
    
    @Transactional(readOnly = true)
    public List<ManagerDTO> getAllManagers() {
        return managerRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public ManagerDTO getManagerById(Long id) {
        Manager manager = managerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Manager", "id", id));
        return convertToDTO(manager);
    }
    
    @Transactional
    public ManagerDTO createManager(ManagerDTO managerDTO) {
        Manager manager = convertToEntity(managerDTO);
        Manager savedManager = managerRepository.save(manager);
        return convertToDTO(savedManager);
    }
    
    @Transactional
    public ManagerDTO updateManager(Long id, ManagerDTO managerDTO) {
        Manager manager = managerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Manager", "id", id));
        
        manager.setName(managerDTO.getName());
        manager.setEmail(managerDTO.getEmail());
        manager.setDepartment(managerDTO.getDepartment());
        
        Manager updatedManager = managerRepository.save(manager);
        return convertToDTO(updatedManager);
    }
    
    @Transactional
    public void deleteManager(Long id) {
        if (!managerRepository.existsById(id)) {
            throw new ResourceNotFoundException("Manager", "id", id);
        }
        managerRepository.deleteById(id);
    }
    
    private ManagerDTO convertToDTO(Manager manager) {
        return new ManagerDTO(
                manager.getId(),
                manager.getName(),
                manager.getEmail(),
                manager.getDepartment()
        );
    }
    
    private Manager convertToEntity(ManagerDTO managerDTO) {
        Manager manager = new Manager();
        // Don't set ID - let JPA generate it
        manager.setName(managerDTO.getName());
        manager.setEmail(managerDTO.getEmail());
        manager.setDepartment(managerDTO.getDepartment());
        return manager;
    }
}
