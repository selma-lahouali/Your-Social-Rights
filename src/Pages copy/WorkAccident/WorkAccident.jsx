import { useState } from "react";

export default function WorkAccident() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <h2 className="main-title">Accident de travail</h2>
      <h3 className="question">Qu'est-ce qu'un'accident de travail</h3>
      <h3
        className={`question ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Que faire en cas d'accident de travail
        <span className="dropdown-arrows">{isOpen ? "▲" : "▼"}</span>
      </h3>
      {isOpen && (
        <div>
          <p className="into-text">
            Un accident vient de se produire ? Suivez ces instructions selon
            votre situation pour garantir votre protection et votre prise en
            charge à 100%.
          </p>
          <h3 className="case-scenario">
            1. L'accident a lieu sur votre site de travail
          </h3>

          <ul className="step-list">
            <li className="step">
              <span>Alerte immédiate:</span> Prévenez (ou faites prévenir par un
              témoin) <span>le médecin du travail interne.</span>
            </li>
            <li className="step">
              <span>Premiers soins:</span> Le médecin assure la prise en charge
              et décide de votre orientation (maintien au poste ou évacuation).
            </li>
            <li className="step">
              <span>Absence de médecin:</span> Prévenez immédiatement votre
              <span>Responsable Sécurité (HSE)</span> ou votre <span>RH</span>.
              En cas d'urgence vitale, appelez les secours (Protection
              Civile/SAMU)
            </li>
            <li className="step">
              <span>Hôpital:</span> Précisez impérativement à l'admission qu'il
              s'agit d'un <span>Accident du Travail</span>.
            </li>
          </ul>

          <h3 className="case-scenario">
            2. L'accident a lieu à l'extérieur (Trajet ou Mission)
          </h3>
          <h3 className="sub-case">- Vous êtes en état de communiquer:</h3>
          <ul className="step-list">
            <li className="step">
              *Appelez immédiatement votre <span>responsable hiérarchique</span>
              .
            </li>
            <li className="step">
              *Informez les secours et le médecin traitant que l'accident est
              survenu durant votre activité professionnelle (ou sur votre trajet
              habituel).
            </li>
          </ul>
          <h3 className="sub-case">- Vous êtes hospitalisé ou inconscient:</h3>
          <ul className="step-list">
            <li className="step">
              *L'entreprise prendra contact avec l'établissement de santé pour
              confirmer le caractère professionnel de l'accident dès qu'elle en
              sera informée (par les autorités ou votre famille).
            </li>
          </ul>
          <p>
            <span>▲ Point crucial:</span> Pour tout accident sur la voie
            publique, un
            <span>PV de police ou de gendarmerie</span> est obligatoire pour
            votre dossier CNAS.
          </p>
          <h3 className="case-scenario">
            3. Cas particulier: Si vous assistez à un accident mortel
          </h3>
          <ul className="step-list">
            <li className="step">
              <span>- Interdiction stricte:</span> Ne modifiez pas l'état des
              lieux et ne déplacez aucun objet.
            </li>
            <li className="step">
              <span>- Alerte:</span> L'entreprise informe immédiatement les
              autorités (Police/Gendarmerie). l'inspection du Travail et la
              CNAS.
            </li>
            <li className="step">
              <span>- Soutien:</span> Une cellule d'accompagnement est activée
              pour les proches et les collègues.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
