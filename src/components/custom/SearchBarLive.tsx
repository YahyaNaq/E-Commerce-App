import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

type SearchBarProps = {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	inputClassname?: string;
};

const SearchBarLive: React.FC<SearchBarProps> = ({ onChange, placeholder="Search", inputClassname }) => {
    return (
		<div className="flex items-center relative">
			{/* Icon */}
			<span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
			<Search className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
			</span>
			<Input
				type="search"
				placeholder={placeholder}
				className={cn("text-xs md:text-sm pl-8 lg:pl-10", inputClassname)}
				onChange={onChange}
			/>
		</div>
    );
}

export default SearchBarLive;
