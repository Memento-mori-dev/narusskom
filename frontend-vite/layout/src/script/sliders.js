export function sliders(width) {
    if (document.querySelector('.everyone')) {
        if (!document.querySelector('.everyone--all')) {
            const swiperEveryone = new Swiper('.everyone', {
                slidesPerView: 3,
                spaceBetween: 20,
                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1.1,
                        spaceBetween: 12,
                    },
                    560: {
                        slidesPerView: 1.8,
                        spaceBetween: 12,
                    },
                    760: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1023: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }
            });
        } else {
            if (width < 1023) {
                const swiperEveryone = new Swiper('.everyone', {
                    slidesPerView: 16,
                    spaceBetween: 20,
                    // And if we need scrollbar
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },
                    breakpoints: {
                        0: {
                            slidesPerView: 1.16,
                            spaceBetween: 12,
                        },
                        560: {
                            slidesPerView: 1.8,
                            spaceBetween: 12,
                        },
                        760: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1023: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 16,
                            spaceBetween: 20,
                        },
                    }
                });
            }
        }
    }

    if (document.querySelector('.history')) {
        const swiperHistory = new Swiper('.history', {
            slidesPerView: 3,
            spaceBetween: 20,
            // And if we need scrollbar
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                560: {
                    slidesPerView: 1.8,
                    spaceBetween: 20,
                },
                760: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1023: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            },
            navigation: {
                nextEl: '.history-controller .next',
                prevEl: '.history-controller .prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }

    if (document.querySelector('.exams')) {
        const swiperExams = new Swiper('.exams', {
            slidesPerView: 4,
            spaceBetween: 20,
            // And if we need scrollbar
            breakpoints: {
                0: {
                    slidesPerView: 1.24,
                    spaceBetween: 20,
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                860: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    }

    if (document.querySelector('[data-js-tab-next]')) {
        if (width < 1023) {
            const swiperNextController = new Swiper('.tabs-next__controller', {
                slidesPerView: 'auto',
                spaceBetween: 8,
                freeMode: true,
                watchOverflow: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    }

    if (document.querySelector('.partners')) {
        const swiperPartners = new Swiper('.partners', {
            slidesPerView: 5,
            spaceBetween: 20,
            freeMode: true,
            watchOverflow: true,
            navigation: {
                nextEl: '.partners-controller .next',
                prevEl: '.partners-controller .prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                },
                390: {
                    slidesPerView: 1.6,
                    spaceBetween: 16,
                },
                600: {
                    slidesPerView: 2.6,
                    spaceBetween: 20,
                },
                900: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            },
        });
    }
}