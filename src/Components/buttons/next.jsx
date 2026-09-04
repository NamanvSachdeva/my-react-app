export default function NextBtn({ disabled = false }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="mt-2 w-full rounded-lg bg-orange-500 px-4 py-2.5 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
    >
      Next
    </button>
  );
}