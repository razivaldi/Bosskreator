
const FilterButton = ({ name, selected, setSelected }) => {
  const active = selected === name ? 'bg-white-20' : ''
  return (
    <button className={`${active} w-[100px] h-[30px] md:w-[120px] md:h-[40px] font-medium text-sm border rounded-[30px]`} onClick={() => setSelected(name)}>{name}</button>)
}
export default FilterButton
