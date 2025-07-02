"use client";
import { useState } from "react";

export default function Home() {
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState<string[]>([]);

	const handleAdd = () => {
		if (input.trim() === "") return;
		setTodos([input, ...todos]);
		setInput("");
	};

	const handleDelete = (idx: number) => {
		setTodos(todos.filter((_, i) => i !== idx));
	};

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-20 px-4">
			<h1 className="text-3xl font-bold mb-8 text-gray-800">할 일 목록</h1>
			<div className="flex w-full max-w-md mb-6 gap-2">
				<input
					type="text"
					className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
					placeholder="할 일을 입력하세요"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") handleAdd();
					}}
				/>
				<button
					type="button"
					className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
					onClick={handleAdd}
				>
					추가
				</button>
			</div>
			<ul className="w-full max-w-md space-y-2">
				{todos.length === 0 && (
					<li className="text-gray-400 text-center py-8">할 일이 없습니다.</li>
				)}
				{todos.map((todo, idx) => (
					<li
						key={`todo-${idx}-${todo}`}
						className="flex items-center justify-between bg-white px-4 py-2 rounded shadow"
					>
						<span>{todo}</span>
						<button
							type="button"
							className="text-red-500 hover:text-red-700 text-sm"
							onClick={() => handleDelete(idx)}
						>
							삭제
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
