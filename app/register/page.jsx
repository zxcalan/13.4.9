import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authoptions } from "../api/auth/[...nextauth]/route";
export default async function Register() {
    const session = await getServerSession(authoptions)
    if(session) redirect('/dashboard')
  return (
    <RegisterForm></RegisterForm>
  )
}
