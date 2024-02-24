"use client";
import { IEvent } from "@/lib/database/models/event.models";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import Checkout from "./Checkout";

const CheckoutButton = ({ event }: { event: IEvent}) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      { hasEventFinished? (
        <p className="p-2 text-red-400">Desculpe, os ingressos não estão mais disponíveis</p>
      ): (
        <>
        <SignedOut>
          <Button asChild className="button rounded-full" size="lg">
            <Link href="/sign-in">
              Comprar ingresso
            </Link>
          </Button>
        </SignedOut>
        <SignedIn>
          <Checkout event={event} userId={userId} />
        </SignedIn>
        </>
      )}
    </div>
  )
}

export default CheckoutButton;