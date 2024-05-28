export default function SpeakerCard() {
  return (
    <div className="bg-lightGrey rounded-lg border-2 border-solid border-lightGrey">
      <div id="profile-photo" className="bg-black rounded-lg py-8">
        <figure className="w-4/5 mx-auto rounded-full overflow-hidden">
          <img src="https://www.wycliffe.ca/wp-content/uploads/bb-plugin/cache/member-fallback-user-image-300x300-circle-4b1323daf0b95dbc95352417464ca5d3-605afc59e679f.png" alt="Google I/O Extended 2024 - Natal" width="100%" height="100%" />
        </figure>
      </div>
      <div className="text-black p-4">
        <h2>Nome Palestrante</h2>
        <h3>Cargo na Empresa X</h3>
        <p>
          Nome ou descrição da palestra que será ministrada pelo palestrante
        </p>
      </div>
    </div>
  )
}