package dev.ferhat.suivicandidatures;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/candidatures")
public class CandidaturesController {
    @Autowired
    private CandidaturesService service;
    @GetMapping
    public ResponseEntity<List<Candidature>> getCandidatures() {
        return new ResponseEntity<List<Candidature>>(service.findAllMovies(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Candidature>> getCandidature(@PathVariable String id){
        return new ResponseEntity<Optional<Candidature>>(service.findCandidatureById(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Optional<Candidature>> deleteCandidature(@PathVariable String id){
        return new ResponseEntity<Optional<Candidature>>(service.deleteCandidatureById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Candidature> updateCandidature(@PathVariable String id,
                                                                   @RequestBody Candidature updatedCandidature){
        Candidature candidature = service.updateCandidature(id, updatedCandidature);
        return ResponseEntity.ok(candidature);
    }
}
