import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import ButtonLogout from "@/components/button-logout";
import { getServerSession } from "next-auth";

export default function LogoutPage() {
  return (
    <div>
      <ButtonLogout />
    </div>
  );
}
