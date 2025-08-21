import Image from "next/image";
import ReservationSideBar from "@/app/components/properties/ReservationSideBar";
import apiService from "@/app/services/apiService";

const PropertyDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  // ✅ Await params here because Next.js treats it as a Promise in some versions
  const { id } = await params;

  const property = await apiService.get(`/api/properties/${id}`);

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          src="/beach_1.jpg"
          fill
          className="object-cover w-full h-full"
          alt="Beach house"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-2 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">{property.data.title}</h1>

          <span className="mb-6 block text-lg text-gray-600">
            {property.data.guests} guest(s) - {property.data.bedrooms} bedrooms(s) - {property.data.bathrooms} bathroom(s)
          </span>

          <hr />

          <div className="py-6 flex items-center space-x-4">
            {property.data.landlord.avatar_url && (
                <Image
                    src={property.data.landlord.avatar_url}
                    alt="Profile Picture"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
             )}
            
            <p>
              <strong>{property.data.landlord.name}</strong> is your host
            </p>
          </div>

          <hr />
          <p className="mt-6 text-lg">
            {property.data.description}
          </p>
        </div>

        <ReservationSideBar 
            property={property.data}
        />
      </div>
    </main>
  );
};

export default PropertyDetailsPage;
