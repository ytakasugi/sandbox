#[allow(unused_imports)]
use pbkdf2::{
    password_hash::{
        rand_core::OsRng,
        PasswordHash, PasswordHasher, PasswordVerifier, SaltString
    },
    Pbkdf2
};

fn main() -> Result<(), pbkdf2::password_hash::Error> {
    let password = b"hunter42"; // Bad password; don't actually use!
    let salt = SaltString::generate(&mut OsRng);

    // Hash password to PHC string ($pbkdf2-sha256$...)
    let password_hash = Pbkdf2.hash_password(password, &salt)?.to_string();

    // Verify password against PHC string
    let parsed_hash = PasswordHash::new(&password_hash)?;
    assert!(Pbkdf2.verify_password(password, &parsed_hash).is_ok());

    Ok(())
}