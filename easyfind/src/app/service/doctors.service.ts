import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  getProductsData() {
    return [
        {"name": "Ayurvedic Doctors", "category": "Doctors", "image": "ayurvedic.png"},
        {"name": "Chest Specialists", "category": "Doctors", "image": "chest_specialist.png"},
        {"name": "Dentists", "category": "Doctors", "image": "dentist.png"},
        {"name": "Dietitians", "category": "Doctors", "image": "dietitian.png"},
        {"name": "Gastroenterologists", "category": "Doctors", "image": "gastroenterologist.png"},
        {"name": "Homeopathic Doctors", "category": "Doctors", "image": "homeopathic.png"},
        {"name": "Neurosurgeons", "category": "Doctors", "image": "neurosurgeon.png"},
        {"name": "Ophthalmologists", "category": "Doctors", "image": "ophthalmologist.png"},
        {"name": "Physiotherapists", "category": "Doctors", "image": "physiotherapist.png"},
        {"name": "Psychiatrists", "category": "Doctors", "image": "psychiatrist.png"},
        {"name": "Skin & Hair Doctors", "category": "Doctors", "image": "skin_hair.png"},
        {"name": "Thyroid Doctors", "category": "Doctors", "image": "thyroid.png"},
        {"name": "Urologists", "category": "Doctors", "image": "urologist.png"},
        {"name": "Bone & Joints Doctors", "category": "Doctors", "image": "bone_joints.png"},
        {"name": "Child Specialist Doctors", "category": "Doctors", "image": "child_specialist.png"},
        {"name": "Dermatologists", "category": "Doctors", "image": "dermatologist.png"},
        {"name": "ENT Specialists", "category": "Doctors", "image": "ent_specialist.png"},
        {"name": "General Physicians", "category": "Doctors", "image": "general_physician.png"},
        {"name": "Neonatologists", "category": "Doctors", "image": "neonatologist.png"},
        {"name": "Oncologists", "category": "Doctors", "image": "oncologist.png"},
        {"name": "Orthopaedic Doctors", "category": "Doctors", "image": "orthopaedic.png"},
        {"name": "Physiotherapists For Home Visit", "category": "Doctors", "image": "physiotherapist_home.png"},
        {"name": "Psychologists", "category": "Doctors", "image": "psychologist.png"},
        {"name": "Skin Doctors", "category": "Doctors", "image": "skin_doctor.png"},
        {"name": "Trichologists", "category": "Doctors", "image": "trichologist.png"},
        {"name": "Veterinary Doctors", "category": "Doctors", "image": "veterinary.png"},
        {"name": "Cardiologists", "category": "Doctors", "image": "cardiologist.png"},
        {"name": "Cosmetic Surgeons", "category": "Doctors", "image": "cosmetic_surgeon.png"},
        {"name": "Diabetologists", "category": "Doctors", "image": "diabetologist.png"},
        {"name": "Eye Specialists", "category": "Doctors", "image": "eye_specialist.png"},
        {"name": "Gynaecologists & Obstetricians", "category": "Doctors", "image": "gynaecologist.png"},
        {"name": "Neurologists", "category": "Doctors", "image": "neurologist.png"},
        {"name": "On Call Doctors", "category": "Doctors", "image": "on_call.png"},
        {"name": "Paediatricians", "category": "Doctors", "image": "paediatrician.png"},
        {"name": "Piles Doctors", "category": "Doctors", "image": "piles.png"},
        {"name": "Sexologists", "category": "Doctors", "image": "sexologist.png"},
        {"name": "Speech Therapists", "category": "Doctors", "image": "speech_therapist.png"},
        {"name": "Unani Doctors", "category": "Doctors", "image": "unani.png"}
    ];
}

getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
}

getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
}

getProducts() {
    return Promise.resolve(this.getProductsData());
}

// getProductsWithOrdersSmall() {
//     return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
// }

// getProductsWithOrders() {
//     return Promise.resolve(this.getProductsWithOrdersData());
// }
}
