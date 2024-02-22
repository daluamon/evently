import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const events = await getAllEvents({
    query: '',
    category: '',
    page: 1,
    limit: 6
  });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5  md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Hospede, Conecte e Celebre: Seus eventos em um só lugar
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Crie eventos, convide amigos e familiares, compartilhe fotos e
              vídeos, e muito mais.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Veja os eventos</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="Hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">
          Confiança por milhares de eventos em todo o mundo
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search
          CAtegory Filter
        </div>

        <Collection
          data={events?.data}
          emptyTitle="Nenhum evento encontrado"
          emptyStateSubtext="Volte mais tarde..."
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
