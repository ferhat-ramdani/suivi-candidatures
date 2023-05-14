package dev.ferhat.suivicandidatures;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CandidaturesRepository extends MongoRepository<Candidature, String> {
    Optional<Candidature> findCandidatureById(String id);
    Optional<Candidature> deleteCandidatureById(String id);
}
