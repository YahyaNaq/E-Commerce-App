import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

type SearchBarProps = {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	inputClassname?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ onChange, placeholder="Search", inputClassname }) => {
    return (
		<div className="flex items-center relative">
			{/* Icon */}
			<Input
				type="search"
				placeholder={placeholder}
				className={cn("text-xs md:text-sm", inputClassname)}
				onChange={onChange}
			/>
			<Button variant="default" className="absolute inset-y-0 right-0 flex items-center rounded-none rounded-e-md">
				<Search className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
			</Button>
		</div>
    );
}

export default SearchBar;
