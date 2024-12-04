import React, { useState } from "react";
import { useGQLMutation } from "../useGQLMutation"; // Import your custom hook
import { ADD_TODO } from "../queries";

const AddTodo: React.FC = () => {
  // Local state for input fields
  const [title, setTitle] = useState<string>("");
  const [isPublic, setIsPublic] = useState<boolean>(false);

  // Use the custom mutation hook
  const { mutate, isLoading, isSuccess, isError, data } = useGQLMutation(
    ADD_TODO,
    { title, is_public: isPublic },
    {
      onSuccess: (data) => {
        console.log("Todo added successfully:", data);
        alert("Todo added successfully!");
      },
      onError: (error) => {
        console.error("Error adding todo:", error);
        alert("Failed to add todo. Please try again.");
      },
    }
  );

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Please enter a valid title.");
      return;
    }
    mutate(); // Trigger the mutation
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "1rem" }}>
      <h2>Add a New Todo</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        {/* Title Input */}
        <input
          type="text"
          placeholder="Todo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            color: "black"
          }}
        />

        {/* Is Public Checkbox */}
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <input
            type="checkbox"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
          />
          Public
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            borderRadius: "4px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            opacity: isLoading ? 0.6 : 1,
          }}
        >
          {isLoading ? "Adding..." : "Add Todo"}
        </button>
      </form>

      {/* Success Message */}
      {isSuccess && (
        <div style={{ marginTop: "1rem", color: "green" }}>
          <h4>Todo Added Successfully:</h4>
          <ul>
            {data?.insert_todos?.returning.map((todo: any) => (
              <li key={todo.id}>
                {todo.title} (ID: {todo.id}, Created:{" "}
                {new Date(todo.created_at).toLocaleString()})
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Error Message */}
      {isError && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          Error adding the todo. Please try again.
        </p>
      )}
    </div>
  );
};

export default AddTodo;
