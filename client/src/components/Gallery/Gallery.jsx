import { useState } from "react";

import photos from "./photos.json"
import styles from "./Gallery.module.css"
export default function Gallery() {
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentPhotos = photos.slice(startIndex, endIndex);
    const totalPages = Math.ceil(photos.length / itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
        }
    };
    return (
        <section id="gallery">
            <h2>Нашата Галерия</h2>
            <div className={styles.galleryGrid}>
                {currentPhotos.map((photo) => (
                    <div key={photo.id} className={styles.galleryItem}>
                        <img src={photo.image} alt={photo.title} />
                        <h3>{photo.title}</h3>
                        <p>{photo.description}</p>
                    </div>
                ))}
            </div>

            <div className={styles.pagination}>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Предишна
                </button>
                <span>
                    Страница {currentPage} от {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Следваща
                </button>
            </div>
        </section>
    );
}