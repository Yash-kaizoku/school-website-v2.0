import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type RouteContext = {
    params: Promise<{ id: string }>;
};

export async function PATCH(
    request: Request,
    { params }: RouteContext
) {
    try {
        const { id } = await params;
        const studentId = Number(id);

        if (!Number.isInteger(studentId)) {
            return NextResponse.json(
                { error: "Invalid student ID" },
                { status: 400 }
            );
        }

        const body = await request.json();

        const { name, rollNo, class: studentClass, section } = body;

        if (!name || !rollNo || !studentClass) {
            return NextResponse.json(
                { error: "Name, roll number, and class are required" },
                { status: 400 }
            );
        }

        const student = await prisma.student.update({
            where: {
                id: studentId,
            },
            data: {
                name,
                rollNo,
                class: studentClass,
                section: section || null,
            },
        });

        return NextResponse.json(student);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to update student" },
            { status: 500 }
        );
    }
}
export async function DELETE(
    request: Request,
    { params }: RouteContext
) {
    try {
        const { id } = await params;
        const studentId = Number(id);

        if (!Number.isInteger(studentId)) {
            return NextResponse.json(
                { error: "Invalid student ID" },
                { status: 400 }
            );
        }

        await prisma.student.delete({
            where: {
                id: studentId,
            },
        });

        return NextResponse.json({
            message: "Student deleted successfully",
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed to delete student" },
            { status: 500 }
        );
    }
}