import { Input } from "@/components/ui/input"
import { Search } from "lucide-react";

type SearchBarProps = {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ onChange, placeholder="Search" }) => {
    return (
		<div className="flex items-center relative">
			{/* Icon */}
			<span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
			<Search className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
			</span>
			<Input type="search" placeholder={placeholder} className="text-xs md:text-sm lg:text-base pl-8 lg:pl-10" onChange={onChange}/>
		</div>
    );
}

export default SearchBar;
