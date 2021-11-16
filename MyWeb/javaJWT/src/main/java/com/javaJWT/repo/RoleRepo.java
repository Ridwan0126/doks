package com.javaJWT.repo;

import com.javaJWT.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role, Long> {
    Role findByName (String name);
}
