import React from 'react'
import { useRouter } from "next/navigation";
import { CiStar } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuBadgePercent, LuUserCircle2 } from "react-icons/lu";
import { RiLogoutCircleLine } from "react-icons/ri";
import { TbShoppingBagCheck } from "react-icons/tb";

 export default function CompteProfile() {
    const router = useRouter();
const HandleLogout = async () => {
    await fetch("http://localhost:8000/backend/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    });
    router.push("/");
};
   return (
     <div>    <div className="grid flex-row-6  gap-5 p-4">
     <div
         onClick={() => {
         router.push("/Page/Profile");
         }}
         className="flex cursor-pointer gap-4"
     >
         <LuUserCircle2 size={30} />
         <p className="text-2xl cursor-pointer">Profile</p>
     </div>
     <div className="flex gap-4">
         <TbShoppingBagCheck size={30} />
         <p className="text-2xl">Commandes</p>
     </div>
     <div className="flex gap-4">
         <CiStar size={30} />
         <p className="text-2xl">Fidélité</p>
     </div>
     <div className="flex gap-4">
         <LuBadgePercent size={30} />
         <p className="text-2xl">Promotions</p>
     </div>
     <div className="flex gap-4">
         <IoMdNotificationsOutline size={30} />
         <p className="text-2xl">Notificetions</p>
     </div>
     <div className="flex gap-4" onClick={HandleLogout}>
         <RiLogoutCircleLine size={30} />
         <p className="text-2xl">Déconnexion</p>
     </div>
     </div></div>
   )
 }
 