import { unstable_noStore as noStore } from "next/cache";
import CabinCard from "../_components/CabinCard";
import { getCabins } from "../_lib/data-service";

async function CabinList({ filter }) {
    noStore()
    const cabins = await getCabins();
    if (!cabins.length) return null

    let FilteredCabins;
    if (filter === "all") FilteredCabins = cabins;
    if (filter === "small") FilteredCabins = cabins.filter(cabin => cabin.maxCapacity <= 3);
    if (filter === "medium") FilteredCabins = cabins.filter(cabin => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7)
    if (filter === "large") FilteredCabins = cabins.filter(cabin => cabin.maxCapacity >= 8)

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {FilteredCabins.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    )
}

export default CabinList;