import { Student } from "../../domain/entities/students";

export interface StudentsRepository {
    findById(id: string): Promise<Student | null>
}