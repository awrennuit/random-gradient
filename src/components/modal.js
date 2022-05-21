export default function Modal({ gradient, name }) {
  return (
    <div className="modal">
      <p>Your gradient is called {name}</p>
      <p>
        Here it is: <span>{gradient}</span>
      </p>
    </div>
  );
}
