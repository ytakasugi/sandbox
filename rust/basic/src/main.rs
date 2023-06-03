fn main() {
    let x: usize = 0;
    let mut y: Option<usize> = None;
    let z: Option<String> = Some(String::new());
    let _f = || x + *y.insert(0) + z.unwrap().len();
}
