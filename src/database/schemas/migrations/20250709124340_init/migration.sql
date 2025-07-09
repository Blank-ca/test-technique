CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE "Accounts" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "balance" DECIMAL(15,2) NOT NULL DEFAULT 0.00,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "Accounts" ("firstName", "lastName", "balance")
VALUES
    ('James', 'Smith', 28374.51),
    ('Emily', 'Johnson', 75940.77),
    ('Michael', 'Williams', 94820.64),
    ('Olivia', 'Miller', 335.07),
    ('Ava', 'Lopez', 0.00);
