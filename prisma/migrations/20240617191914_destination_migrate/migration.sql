-- CreateTable
CREATE TABLE `Destination` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `location` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,
    `duration_days` INTEGER NOT NULL,
    `departure_date` DATETIME(3) NOT NULL,
    `return_date` DATETIME(3) NOT NULL,
    `price` INTEGER NOT NULL,
    `available_slots` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
