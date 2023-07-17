use rand::rngs::OsRng;
use rand::RngCore;
use ring::{digest, pbkdf2};

// ソルトを生成
fn generate_salt() -> [u8; 16] {
    let mut salt = [0u8; 16];

    let mut rng = OsRng;
    rng.fill_bytes(&mut salt);

    salt
}

#[allow(unused)]
fn password_hash(input_password: &str) -> Result<(String, [u8; 16]), ring::error::Unspecified> {
    let mut hash = [0u8; digest::SHA256_OUTPUT_LEN];
    let salt = generate_salt();
    // PBKDF2を使用してパスワードをハッシュ化
    pbkdf2::derive(
        pbkdf2::PBKDF2_HMAC_SHA256,
        std::num::NonZeroU32::new(10000).unwrap(),
        &salt,
        input_password.as_bytes(),
        &mut hash,
    );

    let hased_password = base64::encode(hash);

    Ok((hased_password, salt))
}

fn main() {
    let password = "p@ssword";
    let hashed_pass = password_hash(password);
    println!("ハッシュ化したパスワード: {:?}\nソルト: {:?}",
        hashed_pass.as_ref().unwrap().0,
        hashed_pass.as_ref().unwrap().1
    );
}