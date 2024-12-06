//src/app/api/categories/route.ts

import Menu from "@/models/Menu"
import dbConnect from "@/utils/dbConnect"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    await dbConnect()
    const categories = await Menu.find()

    return NextResponse.json(categories)
  } catch (error) {
    console.error(error)
    return new NextResponse(JSON.stringify({ message: 'Failed to fetch categories' }), { status: 500 })
  }
}
