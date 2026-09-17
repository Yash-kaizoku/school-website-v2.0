import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const students = await prisma.student.findMany();

        return NextResponse.json(students);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to fetch students" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { name, rollNo, class: studentClass, section } = body;

        if (!name || !rollNo || !studentClass) {
            return NextResponse.json(
                { error: "Name, roll number, and class are required" },
                { status: 400 }
            );
        }

        const student = await prisma.student.create({
            data: {
                name,
                rollNo,
                class: studentClass,
                section: section || null,
            },
        });

        return NextResponse.json(student, { status: 201 });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to create student" },
            { status: 500 }
        );
    }
}