"use client";

import { FormEvent, useEffect, useState } from "react";

type Student = {
    id: number;
    name: string;
    rollNo: string;
    class: string;
    section: string | null;
    createdAt: string;
};

export default function StudentsPage() {
    async function handleDelete(id: number) {
        const confirmed = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmed) {
            return;
        }

        try {
            const response = await fetch(`/api/students/${id}`, {
                method: "DELETE",
            });

            const data = await response.json();

            if (!response.ok) {
                setMessage(data.error || "Failed to delete student");
                return;
            }

            setMessage("Student deleted successfully!");

            await fetchStudents();
        } catch (error) {
            console.error(error);
            setMessage("Failed to connect to the server");
        }
    }
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);

    const [editingStudent, setEditingStudent] = useState<Student | null>(null);

    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [studentClass, setStudentClass] = useState("");
    const [section, setSection] = useState("");

    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    async function fetchStudents() {
        try {
            const response = await fetch("/api/students");

            if (!response.ok) {
                throw new Error("Failed to fetch students");
            }

            const data = await response.json();
            setStudents(data);
        } catch (error) {
            console.error(error);
            setMessage("Failed to load students");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchStudents();
    }, []);

    function startEditing(student: Student) {
        setEditingStudent(student);

        setName(student.name);
        setRollNo(student.rollNo);
        setStudentClass(student.class);
        setSection(student.section || "");

        setMessage("");
    }

    function cancelEditing() {
        setEditingStudent(null);

        setName("");
        setRollNo("");
        setStudentClass("");
        setSection("");

        setMessage("");
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setSaving(true);
        setMessage("");

        try {
            const url = editingStudent
                ? `/api/students/${editingStudent.id}`
                : "/api/students";

            const method = editingStudent ? "PATCH" : "POST";

            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    rollNo,
                    class: studentClass,
                    section,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setMessage(data.error || "Something went wrong");
                return;
            }

            setMessage(
                editingStudent
                    ? "Student updated successfully!"
                    : "Student added successfully!"
            );

            cancelEditing();
            await fetchStudents();
        } catch (error) {
            console.error(error);
            setMessage("Failed to connect to the server");
        } finally {
            setSaving(false);
        }
    }

    return (
        <main className="min-h-screen p-8">
            <div className="mx-auto max-w-6xl">

                <h1 className="mb-6 text-3xl font-bold">
                    Student Management
                </h1>

                {/* Form */}
                <section className="mb-10 rounded-lg border p-6">
                    <h2 className="mb-4 text-xl font-semibold">
                        {editingStudent ? "Edit Student" : "Add Student"}
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="grid gap-4 md:grid-cols-2"
                    >
                        <input
                            type="text"
                            placeholder="Student Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="rounded border p-3"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Roll Number"
                            value={rollNo}
                            onChange={(e) => setRollNo(e.target.value)}
                            className="rounded border p-3"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Class"
                            value={studentClass}
                            onChange={(e) => setStudentClass(e.target.value)}
                            className="rounded border p-3"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Section"
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                            className="rounded border p-3"
                        />

                        <div className="flex gap-3 md:col-span-2">
                            <button
                                type="submit"
                                disabled={saving}
                                className="rounded bg-black px-6 py-3 text-white"
                            >
                                {saving
                                    ? "Saving..."
                                    : editingStudent
                                        ? "Update Student"
                                        : "Add Student"}
                            </button>

                            {editingStudent && (
                                <button
                                    type="button"
                                    onClick={cancelEditing}
                                    className="rounded border px-6 py-3"
                                >
                                    Cancel
                                </button>
                            )}
                        </div>
                    </form>

                    {message && (
                        <p className="mt-4">
                            {message}
                        </p>
                    )}
                </section>

                {/* Student Table */}
                <section>
                    <h2 className="mb-4 text-2xl font-bold">
                        Students
                    </h2>

                    {loading ? (
                        <p>Loading students...</p>
                    ) : students.length === 0 ? (
                        <p>No students found.</p>
                    ) : (
                        <div className="overflow-x-auto rounded-lg border">
                            <table className="w-full text-left">
                                <thead className="border-b bg-gray-100">
                                    <tr>
                                        <th className="p-4">ID</th>
                                        <th className="p-4">Name</th>
                                        <th className="p-4">Roll No.</th>
                                        <th className="p-4">Class</th>
                                        <th className="p-4">Section</th>
                                        <th className="p-4">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {students.map((student) => (
                                        <tr key={student.id} className="border-b">
                                            <td className="p-4">{student.id}</td>

                                            <td className="p-4">
                                                {student.name}
                                            </td>

                                            <td className="p-4">
                                                {student.rollNo}
                                            </td>

                                            <td className="p-4">
                                                {student.class}
                                            </td>

                                            <td className="p-4">
                                                {student.section || "-"}
                                            </td>

                                            <td className="p-4">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => startEditing(student)}
                                                        className="rounded border px-4 py-2"
                                                    >
                                                        Edit
                                                    </button>

                                                    <button
                                                        onClick={() => handleDelete(student.id)}
                                                        className="rounded border px-4 py-2"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>

            </div>
        </main>
    );
}