document.addEventListener("DOMContentLoaded", function () {
  const galleryData = [
    {
      id: 1,
      title: "Mountain Landscape",
      category: "nature",
      description:
        "A breathtaking view of mountain peaks covered in snow, with lush green valleys below and clear blue skies above.",
      imageSrc: "images/resized-image-Promo.jpeg",
      thumbnail: "images/thumbs/resized-image-Promo (1).jpeg",
    },
    {
      id: 2,
      title: "Modern Skyscraper",
      category: "architecture",
      description:
        "Colorful glass facade reflecting clouds modern building. This vibrant architectural perspective captures a modern building facade adorned with panels of multicolored glass. The building s glass panes reflect the bright blue sky and fluffy white clouds, creating a stunning visual contrast. What: The image shows a modern building with colorful glass panels.",
      imageSrc: "images/skyscraper.jpeg",
      thumbnail: "images/thumbs/skyscraper (2).jpeg",
    },
    {
      id: 3,
      title: "Tropical Beach",
      category: "travel",
      description:
        "Crystal clear turquoise waters and white sand beaches lined with palm trees. The perfect tropical paradise getaway.",
      imageSrc: "images/Tropical Beach.jpeg",
      thumbnail: "images/thumbs/Tropical Beach (2).jpeg",
    },
    {
      id: 4,
      title: "Wild Lion",
      category: "animals",
      description:
        "A majestic male lion with a full mane, resting on the savanna during sunset in Africa.",
      imageSrc: "images/Lion.jpeg",
      thumbnail: "images/thumbs/Lion (2).jpeg",
    },
    {
      id: 5,
      title: "Ancient Temple",
      category: "architecture",
      description:
        "An ancient stone temple with intricate carvings and towering columns, standing the test of time for centuries.",
      imageSrc: "images/Ancient Temple.jpeg",
      thumbnail: "images/thumbs/Ancient Temple.jpeg",
    },
    {
      id: 6,
      title: "Alpine Lake",
      category: "nature",
      description:
        "A serene alpine landscape with towering snow capped mountains, a crystal clear lake reflecting the blue sky, and a dense evergreen forest surrounding the scene. The tranquil atmosphere evokes a sense of peace and grandeur.",
      imageSrc: "images/Alpine Lake.jpeg",
      thumbnail: "images/thumbs/Alpine Lake (2).jpeg",
    },
    {
      id: 7,
      title: "Polar Bear",
      category: "animals",
      description:
        "A magnificent polar bear traversing across ice floes in the Arctic circle, showcasing its natural environment.",
      imageSrc: "images/polar bear.jpeg",
      thumbnail: "images/thumbs/polar bear.jpg",
    },
    {
      id: 8,
      title: "Venice Canals",
      category: "travel",
      description:
        "The famous canals of Venice with traditional gondolas and historic buildings lining the waterways.",
      imageSrc: "images/venice canals.jpg",
      thumbnail: "images/thumbs/venice canals (2).jpg",
    },
    {
      id: 9,
      title: "Desert Sunset",
      category: "nature",
      description:
        "A stunning sunset over sand dunes, with vibrant orange and purple hues painting the desert landscape.",
      imageSrc: "images/Desert Sunset.jpg",
      thumbnail: "images/thumbs/Desert Sunset (2).jpg",
    },
    {
      id: 10,
      title: "Tokyo Skyline",
      category: "travel",
      description:
        "The colorful and vibrant skyline of Tokyo at night, showcasing the city's bright lights and modern architecture.",
      imageSrc: "images/Tokyo Skyline.jpeg",
      thumbnail: "images/thumbs/Tokyo Skyline (2).jpeg",
    },
    {
      id: 11,
      title: "Fox in Forest",
      category: "animals",
      description:
        "A red fox peeking through autumn foliage in a dense forest, showcasing its natural beauty and curious nature.",
      imageSrc: "images/fox.jpeg",
      thumbnail: "images/thumbs/fox (2).jpeg",
    },
    {
      id: 12,
      title: "Gothic Cathedral",
      category: "architecture",
      description:
        "An impressive gothic cathedral with intricate stained glass windows, flying buttresses, and towering spires.",
      imageSrc: "images/Gothic Cathedral.jpeg",
      thumbnail: "images/thumbs/Gothic Cathedral (2).jpeg",
    },
    {
      id: 13,
      title: "Neon Nexus",
      category: "abstracts",
      description:
        "A vibrant, futuristic composition of intersecting glass-like structures glowing with neon hues.",
      imageSrc: "images/3d Abstract.jpeg",
      thumbnail: "images/thumbs/3d Abstract (2).jpeg",
    },
    {
      id: 14,
      title: "Cosmic Drift",
      category: "abstracts",
      description:
        "Ethereal wisps of teal and magenta swirl in a mysterious, shadowy void.",
      imageSrc: "images/Abstract  Dark Void.jpeg",
      thumbnail: "images/thumbs/Abstract  Dark Void (2).jpeg",
    },
    {
      id: 15,
      title: "Neural Surge",
      category: "abstracts",
      description:
        "Glowing, electric tendrils stretch outward in a dynamic burst of sci-fi energy.",
      imageSrc: "images/Abstract  Tentacle.jpeg",
      thumbnail: "images/thumbs/Abstract  Tentacle (2).jpeg",
    },
    {
      id: 16,
      title: "Digital Velocity",
      category: "tech-coding",
      description:
        "Streams of glowing code rush through a digital tunnel, evoking the feel of a fast-paced cyber network.",
      imageSrc: "images/Code background.jpeg",
      thumbnail: "images/thumbs/Code background (2).jpeg",
    },
    {
      id: 17,
      title: "Syntax Symphony",
      category: "tech-coding",
      description:
        "A colorful matrix of C code fills the screen in sharp detail, highlighting logic, loops, and commands.",
      imageSrc: "images/Programming screen.jpeg",
      thumbnail: "images/thumbs/Programming screen (2).jpeg",
    },
    {
      id: 18,
      title: "Neon Dev Zone",
      category: "tech-coding",
      description:
        "A developer types in a dimly lit room, surrounded by floating lines of neon code in a sleek, futuristic atmosphere.",
      imageSrc: "images/Code Browse.jpeg",
      thumbnail: "images/thumbs/Code Browse (2).jpeg",
    },
  ];
  const galleryGrid = document.getElementById("galleryGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("searchInput");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalCategory = document.getElementById("modalCategory");
  const modalDesc = document.getElementById("modalDesc");
  const closeModal = document.getElementById("closeModal");
  const modalPrev = document.getElementById("modalPrev");
  const modalNext = document.getElementById("modalNext");

  if (!galleryGrid || !galleryData) {
    console.error("Gallery grid or data is not initialized.");
    return;
  }

  let currentFilter = "all";
  let currentSearchTerm = "";
  let currentModalIndex = 0;
  let filteredItems = [];

  function initGallery() {
    renderGallery();

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", handleFilterClick);
    });

    searchInput.addEventListener("input", handleSearch);
    closeModal.addEventListener("click", closeModalView);
    modalPrev.addEventListener("click", prevModalImage);
    modalNext.addEventListener("click", nextModalImage);

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModalView();
      }
    });

    modal.addEventListener("click", (e) => {
      if (e.target.id === "modal" || e.target.id === "closeModal") {
        closeModalView();
      }
    });

    document.addEventListener("keydown", handleKeydown);
  }

  function renderGallery() {
    const searchTerm = currentSearchTerm.toLowerCase();
    filteredItems = galleryData.filter((item) => {
      const matchesFilter =
        currentFilter === "all" || item.category === currentFilter;
      const title = item.title.toLowerCase();
      const description = item.description.toLowerCase();
      const category = item.category.toLowerCase();
      const matchesSearch =
        title.includes(searchTerm) ||
        description.includes(searchTerm) ||
        category.includes(searchTerm);
      return matchesFilter && matchesSearch;
    });

    galleryGrid.innerHTML = "";

    if (filteredItems.length === 0) {
      const noResults = document.createElement("div");
      noResults.className = "no-results";
      noResults.textContent = "No images found matching your search!";
      galleryGrid.appendChild(noResults);
      return;
    }

    filteredItems.forEach((item, index) => {
      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item";
      const thumbnail = item.thumbnail || "path/to/fallback-image.jpg";
      galleryItem.innerHTML = `
        <img src="${thumbnail}" alt="${item.title}">
        <div class="item-info">
            <h3 class="item-title">${item.title}</h3>
            <span class="item-category">${capitalizeFirstLetter(
              item.category
            )}</span>
            <p class="item-desc">${item.description}</p>
        </div>
      `;

      galleryItem.addEventListener("click", () => {
        openModal(index);
      });

      galleryGrid.appendChild(galleryItem);
    });
  }

  function handleFilterClick(e) {
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");

    currentFilter = e.target.dataset.category;

    renderGallery();
  }

  let debounceTimeout;
  function handleSearch(e) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      currentSearchTerm = e.target.value.trim();
      renderGallery();
    }, 300);
  }

  function openModal(index) {
    currentModalIndex = index;
    updateModal();
    modal.classList.add("active");
    document.body.classList.add("no-scroll");
  }

  function closeModalView() {
    modal.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }

  function updateModal() {
    if (!filteredItems[currentModalIndex]) {
      console.error("Invalid modal index.");
      closeModalView();
      return;
    }
    const item = filteredItems[currentModalIndex];
    modalImage.src = item.imageSrc;
    modalTitle.textContent = item.title;
    modalCategory.textContent = capitalizeFirstLetter(item.category);
    modalDesc.textContent = item.description;
  }

  function prevModalImage() {
    currentModalIndex =
      (currentModalIndex - 1 + filteredItems.length) % filteredItems.length;
    updateModal();
  }

  function nextModalImage() {
    currentModalIndex = (currentModalIndex + 1) % filteredItems.length;
    updateModal();
  }

  function handleKeydown(e) {
    if (!modal.classList.contains("active")) return;

    if (e.key === "Escape") {
      closeModalView();
    } else if (e.key === "ArrowLeft") {
      prevModalImage();
    } else if (e.key === "ArrowRight") {
      nextModalImage();
    }
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  initGallery();
});
