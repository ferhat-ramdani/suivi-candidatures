package dev.ferhat.suivicandidatures;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CandidaturesService {
    @Autowired
    private CandidaturesRepository repository;
    public List<Candidature> findAllMovies() {
        return repository.findAll();
    }

    public Optional<Candidature> findCandidatureById(String id) {
        return repository.findCandidatureById(id);
    }

    public Optional<Candidature> deleteCandidatureById(String id) {
        return repository.deleteCandidatureById(id);
    }

    public Candidature updateCandidature(String id, Candidature updatedCandidature) {
        Optional<Candidature> optionalCandidature = repository.findById(id);
        if (optionalCandidature.isEmpty()) {
            System.out.println("Candidature with id " + id + " not found.");
        }
        Candidature candidature = optionalCandidature.get();
        candidature.setEtat_candidature(updatedCandidature.getEtat_candidature());
        candidature.setCommentaire(updatedCandidature.getCommentaire());
        candidature.setDuree(updatedCandidature.getDuree());
        candidature.setEntreprise(updatedCandidature.getEntreprise());
        candidature.setLieu(updatedCandidature.getLieu());
        candidature.setDate_postulation(updatedCandidature.getDate_postulation());
        candidature.setDate_debut(updatedCandidature.getDate_debut());
        candidature.setPoste(updatedCandidature.getPoste());
        candidature.setLien_offre(updatedCandidature.getLien_offre());

        return repository.save(candidature);
    }
}
