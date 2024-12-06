export default function SectionHeder({heder1, heder2}) {
  return(
    <div className="text-center mt-14 mb-4">
      <h3 className="uppercase text-gray-500 font-semibold">{heder1}</h3>
      <h2 className="text-primery font-bold text-4xl">{heder2}</h2>
    </div>
  )
}