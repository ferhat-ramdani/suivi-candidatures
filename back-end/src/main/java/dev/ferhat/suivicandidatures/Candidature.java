package dev.ferhat.suivicandidatures;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.Date;
import java.util.List;

@Document(collection = "candidatures")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Candidature {
    @Id
    private String id;
    private String entreprise;
    private String poste;
    private String date_postulation;
    private String etat_candidature;
    private String lien_offre;
    private String lieu;
    private int duree;
    private String date_debut;
    private String commentaire;
}
