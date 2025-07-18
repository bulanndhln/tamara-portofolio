export default function Line() {
    const LineComponent = ({ color }) => (
        <hr
            style={{
                width: "90%", // Default width agar responsif
                maxWidth: "1200px", // Maksimum lebar garis di layar besar
                height: "0.5px", // Ketebalan garis
                backgroundColor: color, // Warna garis
                border: "none", // Menghapus border default
                margin: "40px auto", // Margin atas & bawah agar lebih proporsional
            }}
        data-aos="fade-up"/>
    );

    return (
        <>
            <LineComponent color="#Ebe2d8"  />
        </>
    );
}
